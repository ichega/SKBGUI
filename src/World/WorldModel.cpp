#include "World/WorldModel.h"
#include <Box2D/box2D.h>
#include <iostream>
#include <CircleCollider/CircleCollider.h>

WorldModel::WorldModel(): ComponentModel()
{
    SetLocalCoord(0,0);
    SetSize(100, 100);
    SetVisibleBorders(false);
     b2Vec2 gravity(0.0f, 9.8f * 12.5);
     b2Vec2 null_gravity(0.0f, 0.0f);
    cout << "it works";
    __world = new b2World(null_gravity);

    GetWorld()->SetContactListener(&contactListener);

}

WorldModel::~WorldModel()
{
    delete __world;
}

void WorldModel::Add(pCircleCollider child)
{
    ComponentModel::Add(pComponent(child));
//    child->Model()->SetWorld(GetWorld());
//    child->Model()->CreateBody();
}

void WorldModel::Add(pBoxCollider child)
{
    ComponentModel::Add(pComponent(child));
//    child->Model()->SetWorld(GetWorld());
//    child->Model()->CreateBody();
}

b2World& WorldModel::World()
{
    return *__world;

}

void WorldModel::SetTime(float32 Time)
{
    __timeStep = Time;
}
void WorldModel::SetVelocity(float32 Velocity)
{
    __velocityIterations=Velocity;
}
void WorldModel::SetIterations(float32 Iterations)
{
    __positionIterations=Iterations;
}

void WorldModel::Step()
{
    __world->Step(__timeStep, __velocityIterations, __positionIterations);
}
b2World* WorldModel::GetWorld()
{
    return __world;
}
void  WorldModel::createGroundBody()
{

    groundBodyDef.position.Set(400.0, 500.0f);
    groundBody = GetWorld()->CreateBody(&groundBodyDef);
    groundBox.SetAsBox(350.0f, 10.0f);
    groundBody->CreateFixture(&groundBox, 0.0f);


}

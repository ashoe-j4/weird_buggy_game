class Rope {
    constructor (bodyA, pointB){
        var options = {
           bodyA: bodyA, 
           pointB: pointB,
           stiffness: 3,
           length: 10
        }
        this.pointB = pointB
        this.rope = Constraint.create(options)

        World.add(world, this.body)
    }
        attach (body){
            this.rope.bodyA = body
    }

        fly(){
            this.rope.bodyA = null
        }

    display(){
        if(this.rope.bodyA){
        push()

        strokeWeight(7)
        stroke("black")
        line(this.pointB.x, this.pointB.y, this.rope.bodyA.position.x, this.rope.bodyA.position.y)

        pop()
    }
}

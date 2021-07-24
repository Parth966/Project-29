class Slingshot {
    constructor(body1, pointB) {
        var options = {
            bodyA: body1,
            pointB: pointB,
            length: 5,
            stiffness: 0.004
        }
        this.pointB = pointB
        this.body = Constraint.create(options)
        World.add(world, this.body)

    }
    display() {
        if (this.body.bodyA != null) {
            var posA = this.body.bodyA.position
            var posB = this.pointB
            line(posA.x, posA.y, posB.x, posB.y)
        }

    }
    fly() {
        this.body.bodyA = null
    }
}
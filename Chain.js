class Connect{
    constructor(bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.004
        }

        this.connect = Constraint.create(options);
        World.add(world,this.connect);
    }

    attach(body){
        this.connect.bodyA = body;
    }

    fly(){
        this.connect.bodyA = null;
    }

    display(){
        if(this.connect.bodyA){
            var pointA = this.connect.bodyA.position;
            var pointB = this.connect.pointB;
            strokeWeight(4);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x - 45, pointB.y - 70);
        }
    }

}

export class admin {
    Email: string;
    password: any;
}

export class User {
    constructor(
       
        public Email : string,
        public password : any            
    )
    {
    }
}


export class Aproject {
    name: string;
    leader : string;
    description: string;
}

export class project{
    constructor(
        public name : string,
        public leader : string,
        public description : string
    ){

    }

}

export class projectGet {
    name: string;
    description: string;
}

export class Employee{
    constructor(
        public First : string,
        public Last : string,
        public Email : string,
        public Projectid : string,
        private flag : boolean
    ){

    }

}


export class EmployeePost {
    public First : string;
    public Last : string;
    public Email : string
}

export class EmployeeGet {
    public First : string;
    public Last : string;
    public Email : string;
    public Projectid :string
}



export class Update_Employee{
    constructor(
        public First : string,
        public Last : string,
        public Email : string,
          ){

    }

}

export class Update_Project{
    constructor(
        public name : string,
        public leader : string,
          ){

    }

}

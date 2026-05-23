if(!localStorage.getItem("users")){

    const users = [

        {
            id: 1,
            username: "admin",
            password: "admin123",
            role: "admin"
        },

        {
            id: 2,
            username: "employee1",
            password: "employee123",
            role: "employee"
        },

        
        {    id: 3,
            username: "employee2",
            password: "employee123",
            role: "employee"
        }

    ];

    localStorage.setItem("users", JSON.stringify(users));
}

if(!localStorage.getItem("leaveRequests")){
    localStorage.setItem("leaveRequests", JSON.stringify([]));
}
let editId = null
if(currentUser.role === "employee"){

    const leaveForm =
    document.getElementById("leaveForm");

  

    leaveForm.addEventListener("submit", function(e){

        e.preventDefault();

        const requests =
        JSON.parse(localStorage.getItem("leaveRequests"));

        const leaveType =
        document.getElementById("leaveType").value;

        const startDate =
        document.getElementById("startDate").value;

        const endDate =
        document.getElementById("endDate").value;

        const reason =
        document.getElementById("reason").value;

        // UPDATE EXISTING REQUEST
        if(editId){

            const request = requests.find(
                req => req.id === editId
            );

            request.leaveType = leaveType;
            request.startDate = startDate;
            request.endDate = endDate;
            request.reason = reason;

            alert("Leave Updated");

            editId = null;
        }

        // CREATE NEW REQUEST
        else{

            const newRequest = {

                id: Date.now(),

                employeeId: currentUser.id,

                employeeName: currentUser.username,

                leaveType: leaveType,

                startDate: startDate,

                endDate: endDate,

                reason: reason,

                status: "Pending"
            };

            requests.push(newRequest);

            alert("Leave Applied");
        }

        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(requests)
        );

        location.reload();
    });

    displayEmployeeLeaves();
}

function displayEmployeeLeaves(){

    const requests =
    JSON.parse(localStorage.getItem("leaveRequests"));

    const table =
    document.getElementById("employeeLeaveTable");

    table.innerHTML = "";

    const myLeaves = requests.filter(
        req => req.employeeId === currentUser.id
    );

    myLeaves.forEach(req => {

        table.innerHTML += `

        <tr>

            <td>${req.leaveType}</td>

            <td>${req.startDate}</td>

            <td>${req.endDate}</td>

            <td>${req.reason}</td>

            <td class="${req.status.toLowerCase()}">
                ${req.status}
            </td>

            <td>

                ${
                    req.status === "Pending"

                    ?
                    `
                    <button onclick="editLeave(${req.id})">
                    Edit
                    </button>
                    
                    <button onclick="deleteLeave(${req.id})">
                    Delete
                    </button>
                    `

                    :

                    "Locked"
                }

            </td>

        </tr>
        `;
    });
}

function deleteLeave(id){

    let requests =
    JSON.parse(localStorage.getItem("leaveRequests"));

    requests = requests.filter(
        req => req.id !== id
    );

    localStorage.setItem(
        "leaveRequests",
        JSON.stringify(requests)
    );

    location.reload();
}

function editLeave(id){

    const requests =
    JSON.parse(localStorage.getItem("leaveRequests"));

    const request = requests.find(
        req => req.id === id
    );

    document.getElementById("leaveType").value =
    request.leaveType;

    document.getElementById("startDate").value =
    request.startDate;

    document.getElementById("endDate").value =
    request.endDate;

    document.getElementById("reason").value =
    request.reason;

    editId = id;
}
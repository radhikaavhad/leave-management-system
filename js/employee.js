if(currentUser.role === "employee"){

    const leaveForm =
    document.getElementById("leaveForm");

    leaveForm.addEventListener("submit", function(e){

        e.preventDefault();

        const requests =
        JSON.parse(localStorage.getItem("leaveRequests"));

        const newRequest = {

            id: Date.now(),

            employeeId: currentUser.id,

            employeeName: currentUser.username,

            leaveType:
            document.getElementById("leaveType").value,

            startDate:
            document.getElementById("startDate").value,

            endDate:
            document.getElementById("endDate").value,

            reason:
            document.getElementById("reason").value,

            status: "Pending"
        };

        requests.push(newRequest);

        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(requests)
        );

        alert("Leave Applied");

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
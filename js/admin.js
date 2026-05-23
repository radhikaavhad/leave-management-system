if(currentUser.role === "admin"){
    displayAllLeaves();
}

function displayAllLeaves(){

    const requests =
    JSON.parse(localStorage.getItem("leaveRequests"));

    const table =
    document.getElementById("adminLeaveTable");

    table.innerHTML = "";

    requests.forEach(req => {

        table.innerHTML += `

        <tr>

            <td>${req.employeeName}</td>

            <td>${req.leaveType}</td>

            <td>${req.startDate}</td>

            <td>${req.endDate}</td>

            <td>${req.reason}</td>

            <td class="${req.status.toLowerCase()}">
                ${req.status}
            </td>

            <td>

                <button
                onclick="updateStatus(${req.id}, 'Approved')">
                Approve
                </button>

                <button
                onclick="updateStatus(${req.id}, 'Rejected')">
                Reject
                </button>

            </td>

        </tr>
        `;
    });
}

function updateStatus(id, status){

    const requests =
    JSON.parse(localStorage.getItem("leaveRequests"));

    const request = requests.find(
        req => req.id === id
    );

    request.status = status;

    localStorage.setItem(
        "leaveRequests",
        JSON.stringify(requests)
    );

    location.reload();
}
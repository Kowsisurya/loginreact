
export const getMonthList = (listmonth) => {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();
    var lastMonths = []
    for (var i = 0; i < listmonth; i++) {
        // lastMonths.push(monthNames[(today.getMonth() - i)] + ' - ' +today.getFullYear()  );
        lastMonths.push(today.getFullYear()+'-'+(today.getMonth() - i));
        // lastMonths.push(today.getFullYear()+'-'+(today.getMonth() - i)+'-'+today.getDate());
    }
    return lastMonths;
}
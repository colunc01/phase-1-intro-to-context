// Your code here
// Employee Record
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Create Employee Records
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  // Create Time In Event
  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
  
    return employee;
  }
  
  // Create Time Out Event
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
  
    return employee;
  }
  
  // Hours Worked On Date
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
  
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // Wages Earned On Date
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // All Wages For
  function allWagesFor(employee) {
    const dates = employee.timeInEvents.map(event => event.date);
    return dates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
  }
  
  // Calculate Payroll
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
  
  // Create Employee Records (Dependent Function)
  function createEmployeeRecords(data) {
    return data.map(createEmployeeRecord);
  }
  
  // Full Payroll Test
  const data = [
    ["Loki", "Odinsson", "HR Representative", 35],
    ["Natalia", "Romanova", "CEO", 100]
  ];
  const employees = createEmployeeRecords(data);
  const payroll = calculatePayroll(employees);
  
  console.log("Payroll:", payroll); 
  
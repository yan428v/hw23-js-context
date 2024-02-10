const firm = new Company();

addPerson.onclick = function () {
    const employee = new Employee(employeeId.value.trim(), firstName.value.trim(),
        lastName.value.trim(), age.value, salary.value);
    if (firm.employees.findIndex(p => p.id === employee.id) >= 0) {
        console.log("11");
        alert(`Person with id: ${person.id} exists`);
    } else {
        clearStats();
        firm.addEmployee(employee);
        console.log(firm)
        const li = createInfoElement(employee.toString(), 'li');

        const buttonDel = createButtonDelete(function () {
            const id = firm.employees.find(p => p.id === employee.id).id;

            console.log(id);

            firm.removeEmployee(id);

            clearStats();
            console.log(firm)
        });

        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }
    employeeId.value = firstName.value = lastName.value = age.value= salary.value = '';
}

calcStats.onclick = function () {
    if (firm.employees.length) {
        const divStats = document.createElement('div')
        const h3avg = createInfoElement(`Average age: ${firm.avgAge().toFixed(1)}`, 'h3');
        const h3min = createInfoElement(`Min age: ${firm.minAge()}`, 'h3');
        const h3max = createInfoElement(`Max age: ${firm.maxAge()}`, 'h3');
        const h3totalSalary = createInfoElement(`Total salary: ${firm.totalSalary()}`, 'h3');
        const h3avgSalary = createInfoElement(`Average salary: ${firm.avgSalary()}`, 'h3');
        divStats.append(h3avg, h3min, h3max, h3totalSalary, h3avgSalary);
        if (stats.firstElementChild.nextElementSibling) {
            stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
        } else {
            stats.appendChild(divStats);
        }
    } else {
        stats.appendChild(createInfoElement('No stats', 'h3'));
    }
}

function printPersons(personsList) {
    while(personsList.firstElementChild){
        personsList.removeChild(personsList.firstElementChild);
    }
    firm.employees.forEach(p => {
        const li = createInfoElement(p.toString(), 'li');
        personsList.appendChild(li);
    });
}

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}


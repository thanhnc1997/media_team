const table = document.querySelector('.table');

let this_day = new Date().getDate(),
		this_month = new Date().getMonth() + 1,
		this_year = new Date().getFullYear(); 

if (this_day < 10) this_day = '0' + this_day;
if (this_month < 10) this_month = '0' + this_month;

document.querySelector('h2').innerHTML = 'Team Media - Bảng phạt tháng ' + this_month + '/' + this_year;

function load_teammates(params) {
	for (let teammate of params) {
		let th = document.createElement('th');
		th.innerHTML = teammate.name;
		
		table.querySelector('thead tr').appendChild(th);
		
		let td = document.createElement('td');
		td.classList.add('text-center');
		td.innerHTML = teammate.total_fouls;
		
		table.querySelector('tbody tr').appendChild(td);
	}
}

load_teammates(teammates);

function load_teammate_details(params) {
	for (let [k, v] of Object.entries(params)) {
		let tr = document.createElement('tr');
		tr.classList.add('details');
		tr.innerHTML = `
		<td>${k}</td>
		`;
		
		for (let detail of v) {
			let td = document.createElement('td');
			td.setAttribute('data-id', detail.id);
			td.classList.add('text-center');
			if (detail.fouls) td.innerHTML = detail.fouls;
			tr.appendChild(td);
		}
		
		table.querySelector('tbody').appendChild(tr);
	}
}

load_teammate_details(current_month);
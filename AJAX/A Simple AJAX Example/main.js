let output = document.getElementById('output');
let contain = output.getElementsByTagName('tbody')[0];
let btn = document.getElementById('btn');


btn.addEventListener('click', () => {
  
  let request = new XMLHttpRequest();
  request.open('GET', 'http://www.filltext.com/?rows=3&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true');

  request.onload = () => {
    if (request.status >= 200 && request.responseText) {
      output.style.display = 'block';
      let data = JSON.parse(request.responseText);
      renderHTML(data);
    } else {
      console.log('We connected to the server, but it returned an error.');
    }
  };

  request.send();
});


function renderHTML(data) {
  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    contain.innerHTML += `<tr>
                            <td>${person.fname+ ' ' +person.lname}</td>
                            <td>${person.tel}</td>
                            <td>${person.address}</td>
                            <td>${person.city}</td>
                            <td>${person.state}</td>
                          </tr>`;
  }
}

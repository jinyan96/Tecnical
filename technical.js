const data = `Index #,Value
A1,41
A2,18
A3,21
A4,63
A5,2
A6,53
A7,5
A8,57
A9,60
A10,93
A11,28
A12,3
A13,90
A14,39
A15,80
A16,88
A17,49
A18,60
A19,26
A20,28`;

const rows = data.split("\n").slice(1);
const values = {};
for (let i = 0; i < rows.length; i++) {
  const row = rows[i].split(",");
  values[row[0]] = Number(row[1]);
}

const output = document.getElementById("output");

const alpha = values["A5"] + values["A20"];
const alphaRow = document.createElement("tr");
const alphaCategory = document.createElement("td");
alphaCategory.textContent = "Alpha";
alphaRow.appendChild(alphaCategory);
const alphaValue = document.createElement("td");
alphaValue.textContent = alpha;
alphaRow.appendChild(alphaValue);
output.appendChild(alphaRow);

const beta = values["A15"] / values["A7"];
const betaRow = document.createElement("tr");
const betaCategory = document.createElement("td");
betaCategory.textContent = "Beta";
betaRow.appendChild(betaCategory);
const betaValue = document.createElement("td");
betaValue.textContent = beta;
betaRow.appendChild(betaValue);
output.appendChild(betaRow);

const charlie = values["A13"] * values["A12"];
const charlieRow = document.createElement("tr");
const charlieCategory = document.createElement("td");
charlieCategory.textContent = "Charlie";
charlieRow.appendChild(charlieCategory);
const charlieValue = document.createElement("td");
charlieValue.textContent = charlie;
charlieRow.appendChild(charlieValue);
output.appendChild(charlieRow);
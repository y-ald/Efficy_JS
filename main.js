const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];
let selectTag = document.getElementById("status");
let input = document.getElementById("success");
let output = document.getElementById("output");

const FormComponent = class {
  constructor() {}
  start() {
    // start to add all option to select component
    oppoStatus.map((element) => {
      let opt = document.createElement("option");
      opt.value = element.K_OPPO_STATUS; // the index
      opt.innerHTML = element.STATUS;
      selectTag.append(opt);
    });
    updateOutput();
  }
};

// Function to update input text + div text
function updateOutput() {
  let selected = oppoStatus[selectTag.value - 1];

  input.value = selected.SUCCESS;
  output_data = {
    status: selected.K_OPPO_STATUS,
    sucess: selected.SUCCESS,
  };
  output.innerText = JSON.stringify(output_data);
}

const fc = new FormComponent();
fc.start();

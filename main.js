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

const FormComponent = class {
  constructor() {}
  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods, properties or change the constructor of this class

    oppoStatus.map((element) => {
      let opt = document.createElement("option");
      opt.value = element.K_OPPO_STATUS; // the index
      opt.innerHTML = element.STATUS;
      selectTag.append(opt);
      input.value = element.SUCCESS;
    });
  }
};

function updateOutput() {
  let selected = selectTag.find("option:selected").val();
  input.val(data[selected + 1]);
}

const fc = new FormComponent();
fc.start();
selectTag.onchange(updateOutput);

document
  .querySelector(".changeSelected")
  .addEventListener("click", changeSelected);
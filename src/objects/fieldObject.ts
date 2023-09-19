interface Field {
  id: number[];
  field: Element;
  shooted: boolean;
  ship: boolean;
}

function createField(id: number[], field: Element) {
  const fieldObj: Field = {
    id,
    field,
    shooted: false,
    ship: false,
  };

  return fieldObj;
}

function generateField() {
  const field = document.createElement("div");
  field.classList.add("field");
  return field;
}

export { Field, createField, generateField };

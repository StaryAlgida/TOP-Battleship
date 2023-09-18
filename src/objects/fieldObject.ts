interface Field {
  id: number;
  field: Element;
  shooted: boolean;
}

function createField(id: number, field: Element) {
  const fieldObj: Field = {
    id,
    field,
    shooted: false,
  };

  return fieldObj;
}

export { Field, createField };

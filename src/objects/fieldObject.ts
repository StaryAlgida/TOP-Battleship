interface Field {
  id: number;
  field: HTMLElement;
}

function createField(id: number, field: Element) {
  return { id, field };
}

export { Field, createField };

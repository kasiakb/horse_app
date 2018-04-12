
export function marksSlider(workInput) {
  const length = workInput.length - 1
  const delta = 100/length;
  const numericKeys = workInput.map((_, i) => {
    return delta*i})
  const marks = {};
  numericKeys.forEach((key, i) => marks[key] = workInput[i]);
  return marks
}

export function selectedCheckboxes(selectedCheckboxes, name) {
  if (selectedCheckboxes.has(name) && name != "Siano") {
    selectedCheckboxes.delete(name);
  } else {
    selectedCheckboxes.add(name);
  }
  return selectedCheckboxes
}

export function resulSectionTitle(selectedCheckboxes, title) {
  let desc
  if (selectedCheckboxes === [] || selectedCheckboxes.length === 0 ) {
    desc = null
  }else{
    desc = title
  }
  return desc
}
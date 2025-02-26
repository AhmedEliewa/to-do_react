export function setItemInLocalStorage(taskName) {
  try {
    localStorage.setItem("task", JSON.stringify(taskName));
  } catch (error) {
    console.log(error);
  }
}
export function getItemFromLocalStorage() {
  try {
    const storedTask = localStorage.getItem("task");
    return storedTask ? JSON.parse(storedTask) : [];
  } catch (error) {
    console.log(error);
  }
}

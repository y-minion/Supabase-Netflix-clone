export default function hanldeError(error) {
  if (error) {
    console.log(error);
    throw new Error(error);
  }
}

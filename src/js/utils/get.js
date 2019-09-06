const get = (path, onload) => {
  let request = new XMLHttpRequest();
  request.open('GET', path);
  request.addEventListener('load', () => onload(request.responseText));
  request.send();

  return request;
};

export default get;
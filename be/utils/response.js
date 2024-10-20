function Response(status, data, message, res) {
  console.log(message);

  res.status(status).send({
    status: status,
    data: data,
    message: message,
  });
}

module.exports = { Response };

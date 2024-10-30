function Response(status, data, message, res) {
  if (data && data.refreshToken) {
    const { refreshToken } = data;
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true });
  }
  res.status(status).send({
    status: status,
    data: data,
    message: message,
  });
}

module.exports = { Response };

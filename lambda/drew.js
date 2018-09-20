exports.handler = async (event, context) => {
  console.log('context', context)
  console.log('event', event)
  return {
    statusCode: 200,
    body: 'Hello, Drew 2',
  }
}

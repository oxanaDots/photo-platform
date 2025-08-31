
// "https://...search?key=..."

export const getMyBookings = (req, res)=>{
  const key = req.query.key
  res.send(`Searching for booking ${key}!`)
}
let dbconnection;
module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "details",
      mongoose.Schema(
        {
          id: Number,
          address: String,
          city: String,
          state: String,
          zipcode: Number
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };
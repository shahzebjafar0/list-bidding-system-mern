const BidList = ({ bids, seller, handleAcceptBid }) => {
  const isSeller =
    seller && seller._id == JSON.parse(localStorage.getItem("user"))?.id;
  const isAccepted = bids?.find((val) => val.accepted === true);
  console.log(isAccepted)
  return (
    <div className="overflow-x-auto flex justify-center">
      <table className="table max-w-md">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Bidder</th>
            <th>Amount</th>
            {seller?._id && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <tr key={bid._id} className="hover">
              <th>{index + 1}</th>
              <td>{bid.bidder?.fullName}</td>
              <td>${bid.amount}</td>
              {isSeller && (
                <td>
                  <button
                    onClick={() => handleAcceptBid(bid._id)}
                    className="btn btn-primary"
                    disabled={isAccepted}
                  >
                    {isAccepted?._id == bid?._id
                      ? "Accepted"
                      : "Accept Bid"}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidList;

const Leg = (props: {
  lot: any;
  onLotChange: any;
  onCopy: any;
  onDelete: any;
}) => {
  const { lot, onLotChange, onCopy, onDelete } = props;
  return (
    <div className="w-full bg-gray-700 rounded py-12 px-12">
      <input
        value={lot}
        type="number"
        onChange={(e) => onLotChange(e.target.value)}
      />
      <button
        className="bg-blue-400 text-white px-2 rounded"
        onClick={() => onCopy()}
      >
        Copy
      </button>
      <button
        className="bg-blue-400 text-white px-2 rounded"
        onClick={() => onDelete()}
      >
        Delete Leg
      </button>
    </div>
  );
};

export default Leg;

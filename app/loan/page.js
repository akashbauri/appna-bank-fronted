export default function Loan() {
  const eligibility = 500; // mock value

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Loan Eligibility</h2>

      <div className="mt-4 p-4 bg-white shadow rounded-xl">
        <p>You are eligible for:</p>
        <h3 className="text-2xl font-bold">₹{eligibility}</h3>

        <p className="mt-2 text-sm text-gray-500">
          Improve your profile to increase your limit.
        </p>
      </div>
    </div>
  );
}

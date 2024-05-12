const Contact = () => {
  return (
    <div className="contact text-center">
      <h1 className="font-bold text-center text-3xl p-2 m-4">Contact Us</h1>
      <form>
        <input placeholder="Name" className="border border-black px-2 mx-3" />
        <input
          placeholder="Message"
          className="border border-black px-2 mx-3"
        />
        <button className="px-3 bg-blue-300 text-white rounded-md mx-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

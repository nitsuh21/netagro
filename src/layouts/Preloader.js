const Preloader = () => {
  return (
    <div className="preloader" style={{display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="loader">
        <div className="pre-shadow" />
        <div className="pre-box" />
      </div>
      <div className="text" style={{marginTop: '70px'}}>
        <h3>Netagro Engineering PLC </h3>
      </div>
    </div>
  );
};
export default Preloader;

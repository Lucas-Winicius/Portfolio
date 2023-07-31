const EmptyDashboard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="-mt-20 space-y-8 select-none mx-5">
        <h1 className="text-7xl text-center text-zinc-100 ">-_-</h1>
        <p className="text-zinc-100 text-center">Tão vazio. Tente selecionar alguma operação ou selecione outra.</p>
      </div>
    </div>
  );
};

export default EmptyDashboard;

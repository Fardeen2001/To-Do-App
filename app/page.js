import ListUi from "@/Components/ListUi";

const GetList = async () => {
  try {
    const res = await fetch(`http://localhost:${process.env.PORT}/api/todo`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("fetching failed");
    }
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};
async function Home() {
  const todoData = await GetList();

  return todoData.result && <ListUi todoData={todoData.result} />;
}

export default Home;

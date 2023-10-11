import ListUi from "@/Components/ListUi";

const GetList = async () => {
  try {
    const res = await fetch("/api/todo", {
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
async function Home(props) {
  const todoData = await GetList();

  return <ListUi todoData={todoData.result} />;
}

export default Home;

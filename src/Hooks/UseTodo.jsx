import axios from "axios";
export default function UseTodos(url, loading, timeInSeconds) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const valueOfInterval = setInterval(() => {
      axios.get(url).then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, timeInSeconds * 1000);

    axios.get(url).then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
      clearInterval(valueOfInterval);
    };
  }, [timeInSeconds]);

  return { todos, loading };
}

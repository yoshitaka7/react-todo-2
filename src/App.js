import './reset.css';
import './style.scss';

function App() {
  return (
    <div>
      <main className="container">
        <h1>Todo List</h1>

        <div className="add">
          <form>
            <input type="text"/>
            <button type="button">追加</button>
          </form>
        </div>

        <div className="flexBox">
          <div className="todo">
            <h2>todo</h2>
            <ul className="todo__list">
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="move"></button>
                  <button className="delete"></button>
                </div>
              </li>
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="move"></button>
                  <button className="delete"></button>
                </div>
              </li>
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="move"></button>
                  <button className="delete"></button>
                </div>
              </li>
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="move"></button>
                  <button className="delete"></button>
                </div>
              </li>
            </ul>
          </div>

          <div className="todo">
            <h2>done</h2>
            <ul className="todo__list">
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="delete"></button>
                </div>
              </li>
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="delete"></button>
                </div>
              </li>
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="delete"></button>
                </div>
              </li>
              <li className="todo__list__item">
                <p className="todo__list__item--title">タスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスクタスク</p>
                <div className="todo__list__item__btn">
                  <button className="delete"></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

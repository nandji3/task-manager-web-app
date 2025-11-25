import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TaskCard from './TaskCard';
import Loader from '../common/Loader';

const TaskList = memo(({ tasks, hasMore, loadMore }) => {
    return (
        <InfiniteScroll
            dataLength={tasks.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={
                <p className="text-center py-10 text-gray-500">
                    No more tasks
                </p>
            }
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </InfiniteScroll>
    );
});

export default TaskList;

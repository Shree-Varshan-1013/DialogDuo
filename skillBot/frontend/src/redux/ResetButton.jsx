import { persistor } from './Store.jsx';

const ResetButton = () => {

    const handleClearState = async () => {
        await persistor.purge();
        // Optionally, dispatch an action to reset non-persisted state
        // dispatch({ type: 'RESET_STATE' });
    };

    return (
        <button onClick={handleClearState}>
            Clear and Empty State
        </button>
    );
};

export default ResetButton;

# use-query-set-state

`use-query-set-state` is a custom React hook that simplifies handling and managing query parameters in the URL. It provides a convenient way to update and synchronize the component state with the query parameters in the URL.


## Installation

Install my-project with npm

```bash
  npm install use-query-set-state
```
    
## Usage

### Import the hook



```javascript
import useQuerySetState from 'use-query-set-state';
```

### Example Usage

```javascript
import React from 'react';
import useQuerySetState from 'use-query-set-state';

const MyComponent = () => {
  // Initialize the hook
  const [searchParams, updateSearchParams] = useQuerySetState();

  // Access the current query parameters
  console.log('Current Query Parameters:', searchParams);

  // Update the query parameters
  const handleButtonClick = () => {
    updateSearchParams({ page: 2, filter: 'example' });
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleButtonClick}>Update Query Parameters</button>
    </div>
  );
};

export default MyComponent;

```

## Authors

- [@jkhan-18](https://github.com/jkhan-18)


## License

[MIT](https://choosealicense.com/licenses/mit/)


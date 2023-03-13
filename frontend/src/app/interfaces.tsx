//for auth slice

export interface AuthCounterState {
    user:unknown,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
};

//for sightings slice

export interface CounterState {
    sightings: unknown[],
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
  }


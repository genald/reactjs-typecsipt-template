import { Auth } from "app/auth/types";

interface RootState {
    auth?: Auth

    // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

export default RootState
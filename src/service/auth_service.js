import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
    FacebookAuthProvider
} from "firebase/auth";

class AuthService {
	constructor() {
		this.firebaseAuth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
		this.githubProvider = new GithubAuthProvider();
        this.facebookProvider = new FacebookAuthProvider();
	}

	login(providerName) {
		const authProvider = this.getProvider(providerName);
		return signInWithPopup(this.firebaseAuth, authProvider);
	}

	logout() {
		this.firebaseAuth.signOut();
	}

	onAuthChange(onUserChanged) {
		this.firebaseAuth.onAuthStateChanged((user) => {
			onUserChanged(user);
		});
	}

	getProvider(providerName) {
		switch (providerName) {
			case "Google":
				return this.googleProvider;
			case "Github":
				return this.githubProvider;
            case "Facebook":
                return this.facebookProvider;
			default:
				throw new Error(`${providerName} 로그인은 지원하지 않습니다.`);
		}
	}
}

export default AuthService;

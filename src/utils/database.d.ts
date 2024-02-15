interface UserMetaData {
    name: string;
    phone: string;
    college: string;
    department: string;
}

interface UserView {
    email: string;
	id: string;
    raw_user_meta_data: UserMetaData;
}

interface Event {
    name: string;
    date: number;
    category: string;
    id: string;
    image: string;
    url: string;
    paymentQR: string;
    description: string;
    tagline: string;
    pool: string;
    fee: string;
    end_date: string;
	coordinators: CoordinatorsType[];
	rules: string[];
}

interface CoordinatorsType {
	name: string;
	phone: string;
}

interface UserEvent {
    user_id: string;
	id: string;
    event_id: string;
	payment: boolean;
    events: Event;
    user_view: UserView;
}

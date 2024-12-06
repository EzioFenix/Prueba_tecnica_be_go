export interface AllOrdersResponseDTO {
    status: number
    result: Result
  }
  
  export interface Result {
    _id: string
    stamp: boolean
    reference_number: string
    status: number
    completion_percentage: number
    cargo: Cargo
    user_id: string
    order_number: string
    route: Route
    created: number
    distance_mts: number
    manager: Manager
    bego_order: boolean
    invoice: Invoice
    pricing: Pricing
    driver: Driver
    trailer: Trailer
    truck: Truck
    version: string
    add_ons: AddOns
    ETA: number
    map: Map
    stampedPercentage: number
    start_date: number
    end_date: number
    status_list: StatusList
    destinations: Destination[]
  }
  
  export interface Cargo {
    "53_48": string
    type: string
    required_units: number
    description: string
    hazardous_type: string
    weigth: number[]
    cargo_goods: string
    hazardous_material: string
    packaging: string
    unit_type: string
    weight_unit: string
  }
  
  export interface Route {
    route: string
    single: number
    pickup: string
    dropoff: string
    status: number
    end_date: number
    start_date: number
    stay: string
  }
  
  export interface Manager {
    _id: string
    nickname: string
    raw_nickname: string
    email: string
    telephone: string
    raw_telephone: string
    country_code: string
    language: string
    date_created: number
    full_documentation: boolean
    verified: boolean
    allow_login: boolean
    availability: number
    mood: number
    connected: boolean
    active_sessions: number
    location: Location
    role: number
    test: boolean
    tags: string[]
    cer: Cer
    key: Key
    key_pswd: string
    version: string
    place_id: string
  }
  
  export interface Location {
    lat: number
    lng: number
    geometry: Geometry
  }
  
  export interface Geometry {
    type: string
    coordinates: number[]
  }
  
  export interface Cer {
    ETag: string
    Key: string
    Bucket: string
    Location: string
  }
  
  export interface Key {
    ETag: string
    Key: string
    Bucket: string
    Location: string
  }
  
  export interface Invoice {
    series_id: string
    fullname: string
    phonenumber: any
    country_code: any
    email: any
    address: string
    company: any
    rfc: string
    cfdi: string
    receiver: Receiver
  }
  
  export interface Receiver {
    address: Address
    branch: any
    cfdi: string
    rfc: string
    company: string
    place_id: string
  }
  
  export interface Address {
    place_id: string
  }
  
  export interface Pricing {
    deferred_payment: boolean
    subtotal: number
    insurance: number
    customs: number
    cruce: number
    taxes: number
    extras: number
    driver_earnings: number
    total: number
    pre_taxes: number
    single: number
  }
  
  export interface Driver {
    _id: string
    nickname: string
    raw_nickname: string
    email: string
    telephone: string
    raw_telephone: string
    country_code: string
    language: string
    date_created: number
    full_documentation: boolean
    verified: boolean
    allow_login: boolean
    availability: number
    mood: number
    connected: boolean
    active_sessions: number
    location: Location2
    role: number
    test: boolean
    version: string
    thumbnail: string
  }
  
  export interface Location2 {
    lat: number
    lng: number
    geometry: Geometry2
  }
  
  export interface Geometry2 {
    type: string
    coordinates: number[]
  }
  
  export interface Trailer {
    _id: string
    attributes: Attributes
    active: boolean
    thumbnail: string
  }
  
  export interface Attributes {
    plates: string
    trailer_number: string
    type: string
  }
  
  export interface Truck {
    _id: string
    attributes: Attributes2
    active: boolean
    thumbnail: string
  }
  
  export interface Attributes2 {
    plates: string
    year: string
    brand: string
    color: string
    caat: string
    colorName: string
    sct_permission: string
    sct_permission_text: string
    sct_number: string
    truck_settings: string
    truck_settings_text: string
    insurer: string
    policy_number: string
  }
  
  export interface AddOns {
    cargo_value: number
    insurance: boolean
    cruce: boolean
    customs_agent: boolean
    min_insurance: boolean
    insurance_percentage: number
  }
  
  export interface Map {
    original_url: string
    thumbnail_url: string
  }
  
  export interface StatusList {
    pickup: Pickup[]
    dropoff: Dropoff[]
  }
  
  export interface Pickup {
    active: boolean
    status: string
  }
  
  export interface Dropoff {
    active: boolean
    status: string
  }
  
  export interface Destination {
    lat: number
    lng: number
    address: string
    startDate: number
    zip_code: number
    place_id_pickup?: string
    contact_info: ContactInfo
    geometry: Geometry3
    raw_address: string
    evidence: Evidence
    status: number
    status_string: string
    status_class: string
    endDate?: number
    place_id_dropoff?: string
  }
  
  export interface ContactInfo {
    name: string
    telephone: string
    email: string
    country_code: string
    rfc: string
  }
  
  export interface Geometry3 {
    type: string
    coordinates: number[]
  }
  
  export interface Evidence {
    pictures: any[]
    extra_notes: string
    signature: Signature
  }
  
  export interface Signature {}
  
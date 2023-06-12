import { User } from "ababil-auth";

export interface Lafaz {
	id: number;
	surat: number;
	ayat: number;
	urutan: number;
	jenis: number;
	teks: string;
	lokasi: string;
}

export interface LafazArti extends Lafaz {
	grammarId: number;
	imageIndex: number;
	grammar: string;
	translate: any[];
	corpus: any;
}

export interface LafazExtend extends Lafaz {
	v1_code: string;
    v1_page: string;
    v2_code: string;
    v2_page: string;
	arti: string;
}

// Lafaz for editor
export interface LafazItem {
	urutan: number;
	mufrodatId: number;
	corpusGrammar: string;
	mufrodats: any[];
	teks: string;
	teksBegin: number;
	teksEnd: number;
	jenis: number;
	arti: string;
	notes: string;
}

export interface PageResult {
	lafazs: Lafaz[]; 
	translate: any[];
	footnotes: any[];
}

export interface UserQuran extends User {
	LastAya: string;
}

export const LafazKind = {
	Hizb: 1,
	Sajdah: 2,
	WaqafLazim: 3,
	WaqafKafi: 4,
	WaqafJaiz: 5,
	WaqafHasan: 6,
	WaqafAlMuraqabah: 7,
	WaqafLaWashal: 8,
	WaqafSaktah: 9,
	Header: 10,
	Basmallah: 11,
	NomorAyat: 12,
	LineBreak: 13,
	Lafaz: 100,
};

export const TranslateKind = {
	Arti: 1,
	Footnote: 2,
};

export const ArabicQuran = {
	Tatweel: 0x0640,
	Fathatan: 0x064b,
	Dammatan: 0x064c,
	Kasratan: 0x064d,
	Fatha: 0x064e,
	Damma: 0x064f,
	Kasra: 0x0650,
	Shadda: 0x0651,
	Sukun: 0x0652,
	Maddah: 0x0653,
	AlifKhanjareeya: 0x0670,
	SmallHighRoundedZero: 0x06df,
	SmallHighNoon: 0x06e8,
};

// Hamza		0x0621
// Alif + HamzaAbove		0x0623
// Waw + HamzaAbove		0x0624
// Alif + HamzaBelow		0x0625
// Ya + HamzaAbove		0x0626
// Alif		0x0627
// Ba		0x0628
// TaMarbuta		0x0629
// Ta		0x062A
// Tha		0x062B
// Jeem		0x062C
// HHa		0x062D
// Kha		0x062E
// Dal		0x062F
// Thal		0x0630
// Ra		0x0631
// Zain		0x0632
// Seen		0x0633
// Sheen		0x0634
// Sad		0x0635
// DDad		0x0636
// TTa		0x0637
// DTha		0x0638
// Ain		0x0639
// Ghain		0x063A
// Fa		0x0641
// Qaf		0x0642
// Kaf		0x0643
// Lam		0x0644
// Meem		0x0645
// Noon		0x0646
// Ha		0x0647
// Waw		0x0648
// AlifMaksura		0x0649
// Ya		0x064A
// HamzaAbove		0x0654
// Alif + HamzatWasl		0x0671
// SmallHighSeen		0x06DC
// SmallHighUprightRectangularZero		0x06E0
// SmallHighMeemIsolatedForm		0x06E2
// SmallLowSeen		0x06E3
// SmallWaw		0x06E5
// SmallYa		0x06E6
// EmptyCentreLowStop		0x06EA
// EmptyCentreHighStop		0x06EB
// RoundedHighStopWithFilledCentre		0x06EC
// SmallLowMeem		0x06ED

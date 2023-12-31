export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          average_play_time: string | null;
          cover_image: string | null;
          description: string;
          genres: string;
          id: string;
          name: string;
          played: boolean;
          released: string;
        };
        Insert: {
          average_play_time?: string | null;
          cover_image?: string | null;
          description: string;
          genres: string;
          id?: string;
          name: string;
          played?: boolean;
          released: string;
        };
        Update: {
          average_play_time?: string | null;
          cover_image?: string | null;
          description?: string;
          genres?: string;
          id?: string;
          name?: string;
          played?: boolean;
          released?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export interface Game {
  average_play_time: string | null;
  cover_image: string | null;
  description: string;
  genres: string;
  id: string;
  name: string;
  played: boolean;
  released: string;
}

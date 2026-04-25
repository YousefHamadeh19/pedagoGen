export interface Strategy {
    id: number | string;
    strategyName: string;
    description: string;
    curriculum: string;
    gradeLevel: string;
    subject: string;
    topic: string;
    lesson: string;
    teacherActions: string[];
    studentActions: string[];
    accreditationAddressed: string[];
    frameworkLang: string[];
    accrediting: string[];
}

export class StrategyManager {
    /**
     * Converts an array of Strategy objects into a JSON string.
     * Useful for saving to localStorage or sending to a database.
     */
    static serialize(strategies: Strategy[]): string {
        try {
            return JSON.stringify(strategies);
        } catch (error) {
            console.error("Failed to serialize strategies:", error);
            return "[]";
        }
    }

    /**
     * Converts a JSON string back into an array of Strategy objects.
     * Useful when fetching from localStorage or an API response.
     */
    static deserialize(jsonString: string | null): Strategy[] {
        if (!jsonString) return [];

        try {
            const parsed = JSON.parse(jsonString);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error("Failed to deserialize strategies:", error);
            return [];
        }
    }
}
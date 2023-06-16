export default function Chat() {
    return (
        <div>
            <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                    <slot name="header"></slot>
                </div>
                <button class="flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100">
                    <svg class="h-4 w-4" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-width="2" d="M12 20c6.627 0 12-5.373 12-12s-5.373-12-12-12" />
                        <path fill="currentColor" d="M7.414 8.586 12 12 16.586 8.586" />
                    </svg>
                </button>
            </div>
            <div class="hidden mt-2">
                <slot name="content"></slot>
            </div>
        </div>
    )
}
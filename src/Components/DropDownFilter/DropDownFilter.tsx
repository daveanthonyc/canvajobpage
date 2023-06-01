import "./DropDownFilter.css"
import { filterableSearcher } from "../../Presenter/Presenter";
import { observer } from "mobx-react";

function DropDownFilter({ dropDownOptions, placeHolder, category }: { dropDownOptions: string[], placeHolder: string, category: string}) {
    return ( 
        <select className="filter" spellCheck="false" onChange={(e) => {filterableSearcher.updateCategory(category, e.target.value)}}>
            <option value="" disabled selected>{placeHolder}</option>
            <option key="starter" value="">All</option>
            {
                dropDownOptions.map((listItem) => (
                    <option key={listItem} value={listItem}>{listItem}</option>
                ))
            }
        </select>
     );
}

export default observer(DropDownFilter);